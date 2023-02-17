import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { type } from "os";
import { db } from "../firebases";



function NewChat() {
const {data : session } = useSession();
const router = useRouter();

  const createNewChat = async () => {
    const doc = addDoc(collection(db, 'users', session?.user?.email!, 'chats'), {
      // messages: [],
      userId: session?.user?.email!,
      cratedAt: serverTimestamp() 
    })
    router.push(`/chat/${(await doc).id}`)
  };

  
  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
