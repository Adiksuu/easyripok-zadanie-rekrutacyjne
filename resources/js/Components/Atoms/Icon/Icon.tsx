import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconProps {
    icon: IconProp;
    size?: SizeProp;
    color?: string;
    className?: string;
}

export default function Icon({ icon, size, color, className }: IconProps) {
    return (
        <FontAwesomeIcon icon={icon} size={size} color={color} className={className} />
    );
}