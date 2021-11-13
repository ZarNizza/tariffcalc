export function ListItem(props) {

    return (
        <li>
            {props.listItem[1]} / {props.listItem[2]} = {props.listItem[3]} ₽
        </li>
    )
}