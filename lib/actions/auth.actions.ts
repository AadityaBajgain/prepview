"use server"

import { db, auth } from "@/firebase/admin";
import { FirebaseError } from "firebase-admin/app";
import { cookies } from "next/headers";

export async function signUp(params: SignUpParams){
    const {uid, name, email} = params;
    
    try{
        const userRecord = await db.collection('users').doc(uid).get();
        if(userRecord.exists){
            return{
                success: false,
                message:"User already exists. Please sign in instead"
            }
        }
        console.log("Creating user document in Firestore...");
        await db.collection('users').doc(uid).set({
            name, email
        });
        console.log("User document created successfully.");

        return{
            success:true,
            message:"Account Created Successfully. Please Sign in"
        }
    }catch(error: unknown)
    {
        console.error("Error creating user", error);
        if((error as FirebaseError).code === 'auth/email-already-exists')
        {
            return{
                success: false,
                message: "This email is already in use"
            }
        }
        return{
            success: false,
            message:"Failed to create an account"
        }
    }
}

export async function signIn(params: SignInParams){
    const {email, idToken} = params;

    try{
        const userRecord = await auth.getUserByEmail(email);
        if(!userRecord){
            return{
                success: false,
                message: "User does not exist. Create an account instead."
            }
        }

        await setSessionCookie(idToken);
    }catch(error: unknown){
        console.error(error);

        return{
            success:false,
            message: "Failed to Log into account",
        }
    }
}

export async function setSessionCookie(idToken:string)
{
    const cookieStore = await cookies();

    const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn: 60*60*24*7*1000, //one week duration
    });

    cookieStore.set('session', sessionCookie, {
        maxAge: 60*60*24*7*1000, //one week duration
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: '/',
        sameSite: "lax",
    })
}

export async function getCurrentUser(): Promise<User| null> {
    const cookieStore = await cookies()

    const sessionCookie = cookieStore.get('session')?.value;

    if(!sessionCookie) return null;

    try{
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

        const userRecord = await db
        .collection('users')
        .doc(decodedClaims.uid)
        .get();

        if(!userRecord) return null;
        console.log("User Record:", userRecord.data());
        return {
            ... userRecord.data(),
            id: userRecord.id,

        } as User;
    }catch(err: unknown)
    {
        console.log(err);
        return null;
    }
}

export async function isAuthenticated()
{
    const user = await getCurrentUser();

    return !!user;  //converts into boolen variable
}

export async function getInterviewsByUserId(userId: string): Promise<Interview[] | null> {
    // console.log(userId)
    const interviews = await db
    .collection('interviews')
    .where('userId', "==", userId)
    .orderBy('createdAt', 'desc')
    // .where('finalized', '==', true)
    .get();

    console.log("interviews :", interviews);
    return interviews.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
    })) as Interview[];
}

export async function getLatestInterviews(params: GetLatestInterviewsParams): Promise<Interview[] | null> {
    const {userId, limit = 20} = params;


    const interviews = await db
    .collection('interviews')
    .orderBy('createdAt','desc')
    .where('finalized', '==', true)
    .where('userId','!=',userId)
    .limit(limit)
    .get();


    return interviews.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
    })) as Interview[];
}
