import SideNav from "../ui/dashboard/sidenav";
//aca van los componentes para estructurar el html de la pagina

export default function Layout (
    {children} : {children: React.ReactNode}){
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
             {/* <HeaderNav /> */}
            <div className="w-full flex-none md:w-64">
                <SideNav/>
            </div>
            <div className="flex-frow p-6 md:overflow-auto md:p-12">{children}</div>
        </div>
    )
}