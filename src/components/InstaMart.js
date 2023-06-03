import { useState } from "react"

const Section = ({ title, description }) => {
    const [isVisible, setIsVisible] = useState(false)
    return (<div>
        <h3>{title}</h3>
        {isVisible ? (<button style={{ textDecoration: "underlined" }} onClick={() => setIsVisible(false)}>Hide Description</button>) :
            <button style={{ textDecoration: "underlined" }} onClick={() => setIsVisible(true)}>Show Description</button>
        }
        {isVisible && <p>{description}</p>}
    </div>)
}

const InstaMart = () => {
    return (
        <div>
            <h2>InstaMart</h2>
            <Section title={"About Instamart"} description={"This is instamart about page"}>
            </Section>
            <h2>Careers</h2>
            <Section title={"About Instamart Careers"} description={"This is instamart about page"}>
            </Section>
        </div>

    )
}

export default InstaMart;