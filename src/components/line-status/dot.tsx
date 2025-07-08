import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './line.css'

interface DotProps {
  status: string;
  color: string;
}

export default function Dot(props: DotProps) {
  const { status, color } = props;
  return (
    <div className='dot-status' >
      <FontAwesomeIcon icon={faCircle} size="xs" color={color} />
      <span className="line-status" style={{color : color}}>{status}</span>
    </div>
  );
}
