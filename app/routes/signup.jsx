export const meta = () => {
    return [
      { title: "EzStock" },
      { name: "description", content: "Welcome to Remix!" },
    ];
  };
  
  import SignUp from "./../Pages/SignUp";
  
  export default function Index() {
    return (
      <div>
        <SignUp></SignUp>
      </div>
    );
  }
  