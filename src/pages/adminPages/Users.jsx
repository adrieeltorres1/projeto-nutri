import { Button, Drawer } from "antd";
import { useState } from "react";

const Users = () => {
    const [visableCreate, setVisableCreate] = useState(false);
    return (
        <>
            <h1 className="flex justify-between items-center">
                Usuários 
                <Button
                    type="primary"
                    onClick={() => setVisableCreate(true)}
                >
                    Novo usuário
                </Button>
            </h1>

            <Drawer
                open={visableCreate}
                onClose={() => setVisableCreate(false)}
                title = 'Cadastrar'
            >
            </Drawer>
        </>
    );
}
 
export default Users;