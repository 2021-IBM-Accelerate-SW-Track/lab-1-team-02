import { AppBar, Toolbar, Typography} from "@material-ui/core"

export default function Header(){
    return (
    <AppBar color="secondary" position="static">
        <Toolbar>   
            <Typography variant="h6">
                2021 IBM Accelerate To-Do List
            </Typography>
        </Toolbar>
    </AppBar>
    )
}