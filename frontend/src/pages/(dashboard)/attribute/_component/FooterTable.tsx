import { Button } from "@/components/ui/button";

const FooterTable = ({ table }: any) => {
    return (
        <div className="flex items-center justify-end space-x-2 py-4">
            <div className="space-x-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Trước
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Tiếp
                </Button>
            </div>
        </div>
    );
};

export default FooterTable;
