"use client";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full flex dark:bg-[#1f1f1f]">
            <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0 bg-secondary">
                {/* Sidebar Component will go here */}
                <div className="p-4 font-bold text-muted-foreground">
                    Sidebar Area
                </div>
            </div>
            <main className="h-full flex-1 md:pl-60">
                {children}
            </main>
        </div>
    );
}

export default MainLayout;