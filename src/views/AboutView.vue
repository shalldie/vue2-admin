<template>
    <div class="about">
        <ve-table
            :columns="columns"
            :table-data="tableData"
            fixed-header
            max-height="80vh"
            :rowStyleOption="rowStyleOption"
            :edit-option="editOption"
            rowKeyFieldName="rowKey"
            :contextmenu-body-option="contextmenuBodyOption"
            border-y
        />
    </div>
</template>

<script>
export default {
    name: 'AboutView',
    components: {},
    data() {
        return {
            rowStyleOption: {
                clickHighlight: false,
                hoverHighlight: false
            },

            // contextmenu body option
            contextmenuBodyOption: {
                contextmenus: [
                    { type: 'CUT' },
                    { type: 'COPY' },
                    { type: 'SEPARATOR' },
                    { type: 'INSERT_ROW_ABOVE' },
                    { type: 'INSERT_ROW_BELOW' },
                    { type: 'SEPARATOR' },
                    { type: 'REMOVE_ROW' },
                    { type: 'EMPTY_ROW' },
                    { type: 'EMPTY_CELL' }
                ]
            },
            editOption: {
                // cell value change
                // cellValueChange: ({ row, column }) => {
                //     console.log('cellValueChange row::', row);
                //     console.log('cellValueChange column::', column);
                // }
            },
            columns: [
                {
                    field: '',
                    key: 'theIndex',
                    title: '',
                    width: 50,
                    align: 'center',
                    operationColumn: true,
                    renderBodyCell: ({ _row, _column, rowIndex }, _h) => {
                        return ++rowIndex;
                    }
                },
                { field: 'name', key: 'a', title: 'Name', width: 100, edit: true },
                { field: 'date', key: 'b', title: 'Tel', width: 200, edit: true },
                { field: 'hobby', key: 'c', title: 'Hobby', width: 300, edit: true },
                { field: 'address', key: 'd', title: 'Address', width: 300, edit: true }
            ],
            tableData: [
                {
                    rowKey: 0,
                    name: 'John',
                    date: '1900-05-20',
                    hobby: 'coding and coding repeat',
                    address: 'No.1 Century Avenue, Shanghai'
                },
                {
                    rowKey: 1,
                    name: 'Dickerson',
                    date: '1910-06-20',
                    hobby: 'coding and coding repeat',
                    address: 'No.1 Century Avenue, Beijing'
                },
                {
                    rowKey: 2,
                    name: 'Larsen',
                    date: '2000-07-20',
                    hobby: 'coding and coding repeat',
                    address: 'No.1 Century Avenue, Chongqing'
                },
                {
                    rowKey: 3,
                    name: 'Geneva',
                    date: '2010-08-20',
                    hobby: 'coding and coding repeat',
                    address: 'No.1 Century Avenue, Xiamen'
                },
                {
                    rowKey: 4,
                    name: 'Jami',
                    date: '2020-09-20',
                    hobby: 'coding and coding repeat',
                    address: 'No.1 Century Avenue, Shenzhen'
                },
                {
                    rowKey: 5,
                    name: 'John',
                    date: '1900-05-20',
                    hobby: 'coding and coding repeat',
                    address: 'No.1 Century Avenue, Shanghai'
                },
                {
                    rowKey: 6,
                    name: 'Dickerson',
                    date: '1910-06-20',
                    hobby: 'coding and coding repeat',
                    address: 'No.1 Century Avenue, Beijing'
                },
                {
                    rowKey: 7,
                    name: 'Larsen',
                    date: '2000-07-20',
                    hobby: 'coding and coding repeat',
                    address: 'No.1 Century Avenue, Chongqing'
                },
                {
                    rowKey: 8,
                    name: 'Geneva',
                    date: '2010-08-20',
                    hobby: 'coding and coding repeat',
                    address: 'No.1 Century Avenue, Xiamen'
                },
                {
                    rowKey: 9,
                    name: 'Jami',
                    date: '2020-09-20',
                    hobby: 'coding and coding repeat',
                    address: 'No.1 Century Avenue, Shenzhen'
                }
            ]
        };
    },
    async mounted() {
        // const result = await http.get('/lalalax');
        // console.log(result);
    }
};
</script>
