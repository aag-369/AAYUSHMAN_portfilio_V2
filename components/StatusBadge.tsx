import { Status } from "@/lib/constants";

export const StatusBadge = ({ status }: { status: Status }) => {
  const isCompleted = status === "COMPLETED";
  return (
    <div className={`font-mono text-[10px] px-2 py-1 rounded-full border ${isCompleted ? 'border-cyber/30 text-cyber bg-cyber/10' : 'border-quantum/30 text-quantum bg-quantum/10'}`}>
      {status}
    </div>
  );
};
