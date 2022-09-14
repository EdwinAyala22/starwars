import React from 'react'

export const Detalles = ({gender, birth, height, mass, planet, eye, skin, hair, created, edited}) => {
    return (
        <>
            <table className="table text-center table-dark table-borderless table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Gender</th>
                        <th scope="col">Birth year</th>
                        <th scope="col">Height</th>
                        <th scope="col">Mass</th>
                        <th scope="col">Created</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{gender}</td>
                        <td>{birth}</td>
                        <td>{height} cm</td>
                        <td>{mass} kg</td>
                        <td>{created}</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th scope="col">Eye color</th>
                        <th scope="col">Skin color</th>
                        <th scope="col">Hair color</th>
                        <th scope="col">Planet</th>
                        <th scope="col">Edited</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{eye}</td>
                        <td>{skin}</td>
                        <td>{hair}</td>
                        <td>{planet}</td>
                        <td>{edited}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
