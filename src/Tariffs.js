export function Tariffs(props) {
    const a = props.a;
    return (
        <div>
        <table>
            <thead>
            <tr><td colSpan="10">Тарифные условия</td></tr>
            <tr> 
            <td>Перевозчик</td>
            <td>Тариф</td>
            <td>Такса,<br/>₽/км</td>
            <td>Багаж<br/>бесплатно,<br/>кг</td>
            <td>Багаж<br/>перевес,<br/>₽</td>
            <td>Перевес<br/>за 1 кг</td>
            <td>Багаж<br/>максимум,<br/>кг</td>
            <td>Детский<br/>возраст</td>
            <td>Детская<br/>скидка,<br/>%</td>
            <td>Скидка<br/>без учёта<br/>багажа</td>
            </tr>
            </thead>
            <tbody>
                {
                    a.map((ai)=>{
                        return (
                            <tr key={Math.random()}>
                                <td align="left">{props.providerName[ai[0]]}</td>
                                <td align="left">{ai[1]}</td>
                                <td>{ai[2]}</td>
                                <td>{ai[3]}</td>
                                <td>{ai[4]===0?"нет":ai[4]}</td>
                                <td>{ai[5]?"да":""}</td>
                                <td>{ai[6]}</td>
                                <td>{ai[7]===0?"нет":ai[7]}</td>
                                <td>{ai[8]===0?"нет":ai[8]}</td>
                                <td>{ai[9]?"да":""}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )
}