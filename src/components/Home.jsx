import Logo from "../assets/logo-wbg.png";
import SearchInput from "./SearchInput";


const Home = () => {
    
    
    return ( <div className="flex h-[100vh] flex-col"> 
    
   <main className="grow flex justify-center">
    <div className="w-full px-5 flex flex-col items-center mt-44">
    <img className="w-[172px] md:w-[272px] mb-8" src={Logo}/>
    <SearchInput/>
        
    </div>
   </main>
    
    </div>
    );
};

export default Home;
