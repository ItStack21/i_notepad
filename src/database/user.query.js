const QueryUser = {
    REGISTER_USER: `
        INSERT INTO i_notepad.users
        (name, email, password)
        VALUES (?, ?, ?)
    `,

    IS_USER_EXIST: `
        SELECT * FROM i_notepad.users
        WHERE
        email = ?
    `
};

export default QueryUser;