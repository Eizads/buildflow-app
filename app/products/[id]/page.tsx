const DynamicId = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    return (
        <div>
            <h1>product {id}</h1>
        </div>
    )
}

export default DynamicId