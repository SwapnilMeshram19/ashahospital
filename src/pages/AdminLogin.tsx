import React,{useState,FC} from "react";
import { usePostAdminLoginMutation} from "../features/adminLogin/loginSlice";
type InputEvent =React.ChangeEvent<HTMLInputElement>;
export const AdminLogin:FC = () => {
  const [name,setName]=useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [postAdminLogin]=usePostAdminLoginMutation();
  const [token,setToken]=useState<String|undefined>("");

 const login = async () =>{
  const loginDetails={
    name,
    password
  };
  console.log(loginDetails)
  let res=await postAdminLogin(loginDetails).unwrap();
  setToken(res.token);
 }
 console.log(token)

  return (
    <div>
      <section className="gradient-form h-full bg-gray-200 md:h-screen">
        <div className="container h-fit px-6 pt-16">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-gray-800">
            <div className="xl:w-[40%]">
              <div className="block rounded-lg bg-white shadow-lg">
                <div className="g-0 justify-center lg:flex lg:flex-wrap">
                  <div className="px-2 md:px-0 lg:w-[80%]">
                    <div className="md:mx-4 md:p-8">
                      <div className="text-center">
                        <h4 className="mt-1 mb-12 pb-1 text-2xl font-semibold">
                          Administrator Login
                        </h4>
                      </div>
                      <form>
                        <p className="mb-4">Please login to your account</p>
                        <div className="mb-4">
                          <input
                            type="text"
                            value={name}
                            className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                            placeholder="Username"
                            
                            onChange={(e:InputEvent):void=>setName(e.target.value)}
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            value={password}
                            className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                            placeholder="Password"
                            onChange = {(e:InputEvent):void=>setPassword(e.target.value)}
                          />
                        </div>
                        <div className="mb-12 pt-1 pb-1 text-center">
                          <button
                            className="mb-3 inline-block w-full rounded bg-blue-700 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onClick={()=>login()}
                          >
                            Log in
                          </button>
                          <a className="text-gray-500" href="#!">
                            Forgot password?
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
