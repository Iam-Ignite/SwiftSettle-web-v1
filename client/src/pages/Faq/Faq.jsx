const Faq = () => {
    return (
        <section className='sm:mt-[10vh]'>
            <div>
                <h1>Frequently Asked Questions (FAQs)</h1>
            </div>
            <Accordion />
        </section>
    )
}

const Accordion = ({ question, answer }) => {
    return (
        <div>
            <h3>{question}</h3>
            <div>
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default Faq