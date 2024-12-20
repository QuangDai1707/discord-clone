const MainLayout =async ({children}:{
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">

            </div>
            <main>
            {children}
            </main>
        </div>
    )
}
