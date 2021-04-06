import { useRouter } from "next/router"

const Test = () => {
    const router = useRouter();
    return (
        <div>
          <span>hi</span>
          <button onClick={() => router.push('/')}>heyyyyy</button>
        </div>
    );
};

export default Test;
