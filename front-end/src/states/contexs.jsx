import { useContext,createContext,useState } from "react";
export        const Files_context=createContext()
  export      const Information_context=createContext()
   export      const Messages_context=createContext()
   export      const Login_Context=createContext()
      export      const Personel_context=createContext()

export  function Context({children})
    {          
                  var [Personel,setPersonel]=useState({});

            var [show_confirm_button,set_show_confirm_button]=useState(false);
            var [Login_Show,setLogin]=useState(false);
            var [Messages,setMessages]=useState([]);
       
return  (
  <Personel_context.Provider  value={{Personel,setPersonel}} >
<Messages_context.Provider  value={{Messages,setMessages,show_confirm_button,set_show_confirm_button}} >
<Login_Context.Provider value={{Login_Show, setLogin}}>

{children}
</Login_Context.Provider>

</Messages_context.Provider>
</Personel_context.Provider>)

    }
    