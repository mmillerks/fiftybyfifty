import React, {useRef} from "react";
import useCollapse from 'react-collapsed';



export default function StateList(props) {
    const al = useRef()

    const handleChange = () => {
        console.log(al.current.checked)
    }

    function Demo() {
        const [isExpanded, setExpanded] = useState(false)
        const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })}
      
      
    return (
        <div>
            <button
                {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
            >
                {isExpanded ? 'Collapse' : 'Expand'}
            </button>
            <section {...getCollapseProps()}>Collapsed content 🙈</section>
         </div>
        
    
        );
    }