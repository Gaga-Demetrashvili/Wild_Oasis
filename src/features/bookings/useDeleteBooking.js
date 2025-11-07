import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookinApi } from "../../services/apiBookings";

export function useDeleteBooking() {
    const queryClient = useQueryClient();

    const { isPending: isDeleting, mutate: deleteBooking } = useMutation({
        mutationFn: deleteBookinApi,
        onSuccess: () => {
            toast.success("Booking successfully deleted");
            queryClient.invalidateQueries({
                queryKey: ["bookings"],
            });
        },
        onError: err => toast.error(err.message),
    });

    return { isDeleting, deleteBooking }
}
