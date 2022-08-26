export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repositoryName ?? 'Default'}</strong>
            <p>Forms in react</p>

            <a href="">
                Acessar repositório
            </a>
        </li>
    )
}