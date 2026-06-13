import Icon from "@/Components/Atoms/Icon/Icon";
import { TaskStatus } from "@/types/task";
import { faCheckCircle, faHourglass } from "@fortawesome/free-regular-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

interface StatusIconProps {
    status: TaskStatus;
}

export default function StatusIcon({ status }: StatusIconProps) {
  switch (status) {
    case 'in_progress':
        return <Icon icon={faHourglass} color="#e9f937ff" />
    case 'done':
        return <Icon icon={faCheckCircle} color="#00ff04ff" />
    default:
        return <Icon icon={faMinus} color="#464646ff" />
  }
}
