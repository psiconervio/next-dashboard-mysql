export default function Layout (
    {children} : {children: React.ReactNode}){
    return (
        <section>
            esto es el layout del dashboards
            {children}
        </section>
    )
}