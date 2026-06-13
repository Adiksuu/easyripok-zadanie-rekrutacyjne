import Icon from "@/Components/Atoms/Icon/Icon";
import { TaskStatus } from "@/types/task";
import { faCheck, faCheckCircle, faHourglassStart } from "@fortawesome/free-solid-svg-icons";

interface StatusIconProps {
    status: TaskStatus;
}

export default function StatusIcon({ status }: StatusIconProps) {
  switch (status) {
    case 'in_progress':
        return <Icon icon={faHourglassStart} />
    case 'done':
        return <Icon icon={faCheckCircle} />
    default:
        return <Icon icon={faCheck} />
  }
}
