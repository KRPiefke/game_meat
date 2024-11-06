import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/util/firebaseConfig';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, 'freezer'));
    const freezers = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(freezers);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // validate data

    const docRef = await addDoc(collection(db, 'freezer'), data);

    return NextResponse.json({ id: docRef.id, message: 'success' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();

    // validate data

    const docRef = doc(db, 'freezer', data.id);

    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      // Return a message if the document doesn't exist
      return NextResponse.json({ error: `No document found to update with id: ${data.id}` }, { status: 404 });
    }

    await updateDoc(docRef, data);

    return NextResponse.json({ message: 'success' }, { status: 202 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    const docRef = doc(db, 'freezer', id);

    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      // Return a message if the document doesn't exist
      return NextResponse.json({ error: `No document found to delete with id: ${id}` }, { status: 404 });
    }

    await deleteDoc(docRef);

    return NextResponse.json({ message: 'success' }, { status: 202 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
