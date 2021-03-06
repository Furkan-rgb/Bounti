import React from "react";
import { Table, Row, Container, Col, Tooltip, User, Text, Spacer, Button, Modal } from '@nextui-org/react';
import { StyledBadge } from "./StyledBadge";
import './Tasks.css';

function Tasks() {
    const columns = [
        { name: "TASK", uid: "task" },
        { name: "DAO", uid: "dao" },
        { name: "STATUS", uid: "status" },
        { name: "ACTIONS", uid: "actions" },
    ];
    const tasks = [
        {
            id: 1,
            task: "Implement Protocol",
            dao: "UniSwap",
            team: "Management",
            status: "active",
            age: "29",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuemhTEun-zByzH2wxWCo5dTjrUP8v2sbJAoajF7JmXmZcHHaQ6Za0Qk5xNldQHHp1lY&usqp=CAU",
            desc: "This task needs to be done asap...",
        },
        {
            id: 2,
            task: "Edit Contract",
            dao: "Curve DAO",
            team: "Development",
            status: "paused",
            age: "25",
            avatar: "https://cryptoclothing.cc/merch/curve-dao-token-crv-sticker.jpg?v=022",
            desc: "Need to edit the main files so that...",
        },
        {
            id: 3,
            task: "Change Colours",
            dao: "Maker DAO",
            team: "Development",
            status: "active",
            age: "22",
            avatar: "https://pbs.twimg.com/profile_images/1196456510424961025/zacb-9pN_400x400.jpg",
            desc: "The colours don't fit the design.",
        },
        {
            id: 4,
            task: "Edit UI",
            dao: "UniSwap",
            team: "Marketing",
            status: "review",
            age: "28",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsuemhTEun-zByzH2wxWCo5dTjrUP8v2sbJAoajF7JmXmZcHHaQ6Za0Qk5xNldQHHp1lY&usqp=CAU",
            desc: "Users are having trouble finding the right...",
        },
        {
            id: 5,
            task: "Fix Bug",
            dao: "Maker DAO",
            team: "Sales",
            status: "active",
            age: "24",
            avatar: "https://pbs.twimg.com/profile_images/1196456510424961025/zacb-9pN_400x400.jpg",
            desc: "Critical bug in the login component.",
        },
    ];

    const [visible, setVisible] = React.useState(false);

    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    const renderCell = (task, columnKey) => {
        const cellValue = task[columnKey];
        switch (columnKey) {
            case "task":
                return (
                    <Col css={{ paddingLeft: 0 }}>
                        <Row >
                            <Text b size={14} css={{ tt: "capitalize" }}>
                                {cellValue}
                            </Text>
                        </Row>
                        <Row>
                            <Text small i weight="light">Task description</Text>
                        </Row>
                    </Col>
                );
            case "dao":
                return (
                    <Col css={{ paddingLeft: 0 }}>
                        <Row>
                            <User squared src={task.avatar} name={cellValue} css={{ p: 0 }}>
                            </User>
                        </Row>

                    </Col>
                );
            case "status":
                return <StyledBadge type={task.status}>{cellValue}</StyledBadge>;

            case "actions":
                return (
                    <Row justify="center" align="center">
                        <Col css={{ d: "flex", backdropFilter: ('2px') }}>
                            <Spacer x={1} />
                            <Tooltip
                                content="See task details"
                                color="error"
                                onClick={() => console.log("Open more info", task.id)}
                            >
                                <Button size="sm" color='secondary' onClick={handler}>More Info</Button>

                            </Tooltip>
                        </Col>
                    </Row >
                );
            default:
                return cellValue;
        }
    };
    return (
        <Container gap={0}>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                blur
            >
            </Modal>
            <Row css={{ paddingBottom: 16 }} gap={1}>
                <Col span={6}>
                    <Row><Text h3>Current Tasks</Text></Row>
                    <Table
                        aria-label="Example table with custom cells"
                        css={{
                            height: "auto",
                            minWidth: "100%",
                        }}
                        selectionMode="single"
                    >
                        <Table.Header columns={columns}>
                            {(column) => (
                                <Table.Column
                                    key={column.uid}
                                    hideHeader={column.uid === "actions"}
                                    align={column.uid === "actions" ? "center" : "start"}
                                >
                                    {column.name}
                                </Table.Column>
                            )}
                        </Table.Header>
                        <Table.Body items={tasks}>
                            {(item) => (
                                <Table.Row>
                                    {(columnKey) => (
                                        <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                                    )}
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </Col>

                <Col span={6}>
                    <Text h3>New Tasks</Text>
                    <Table
                        aria-label="Example table with custom cells"
                        css={{
                            height: "auto",
                            minWidth: "100%",
                        }}
                        selectionMode="single"
                    >
                        <Table.Header columns={columns}>
                            {(column) => (
                                <Table.Column
                                    key={column.uid}
                                    hideHeader={column.uid === "actions"}
                                    align={column.uid === "actions" ? "center" : "start"}
                                >
                                    {column.name}
                                </Table.Column>
                            )}
                        </Table.Header>
                        <Table.Body items={tasks}>
                            {(item) => (
                                <Table.Row>
                                    {(columnKey) => (
                                        <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                                    )}
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </Col>
            </Row>



        </Container>

    );
}
export default Tasks;