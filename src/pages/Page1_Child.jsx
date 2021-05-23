const Page1_Child = (props) => {
    const { isOpen } = props
    return (
        <div>
            <small>Page1_Child</small>
            {isOpen ? (
                <div>
                    <h3>Open!</h3>
                </div>
            ) : null}
        </div>
    )
}

export default Page1_Child
