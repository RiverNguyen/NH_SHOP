import AttributeList from "./_component/list";

const AttributeManagement = () => {
    return (
        <div>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        <AttributeList />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AttributeManagement;
