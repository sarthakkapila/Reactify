
/** @jsx createElement */
function Counter() {
    const [state, setState] = Reactify.useState(1)
    return (
        <h1 onClick={() => setState(c => c + 1)}>
        Count: {state}
        </h1>
    )
    }
    const element = <Counter />
    const container = document.getElementById("root")
    Reactify.render(element, container)    