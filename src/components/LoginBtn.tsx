import { signIn } from "next-auth/react";
import { Drawer } from "vaul";
import { FcGoogle } from "react-icons/fc";

function LoginBtn() {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger className="cursor-pointer px-4 py-2 rounded-lg frame">
        <>Login</>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0" />
        <Drawer.Content className=" flex flex-col mx-4 rounded-t-[10px] h-[56%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 cursor-pointer active:cursor-grab bg-zinc-100/10 backdrop-blur-3xl rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5  flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <Drawer.Title className="text-5xl tracking-wider font-sans text-center font-bold my-4">
              Login
            </Drawer.Title>
            <Drawer.Description className="text-lg tracking-wider font-sans text-center font-semibold my-4">
              Welcome back!
            </Drawer.Description>
            <form
              action={async () => {
                await signIn();
              }}
            >
              <div
                onClick={async () => {
                  await signIn("google");
                }}
                className="mx-auto flex items-center gap-3 w-64 px-8 py-2 rounded-lg bg-white dark:bg-dark frame my-4 active:scale-85 transition-all duration-300"
              >
                <FcGoogle size={24} />
                Login With Google
              </div>
            </form>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default LoginBtn;
