import { RepositoryItem } from './RepositoryItem';

export function RepositoryList() {
    return (
        <section className='repository-list'>
            <h1>Lista de repositorios</h1>

            <ul>
                <RepositoryItem
                    repositoryName='nome'
                    description='Forms'
                    linl='https://github.com/' />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    )
}