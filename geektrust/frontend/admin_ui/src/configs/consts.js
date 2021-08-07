export const config = {
    apis: {
        users: 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
    },
    utils:{
        getPageIndex:(cur)=>{
            let itemsPerPage = enums.numberOfItemsPerPage
            let _start = (cur - 1) * itemsPerPage
            let _end = cur * itemsPerPage
            return {_start, _end}
        }
    }
}

export const enums = {
    numberOfItemsPerPage:10,
    headings: {
        admin: 'Admin Interface, XYZ Corp.',
    },
    labels: {
        adminSearch: 'AdminSearch'
    },
    placeholders: {
        adminSearch: 'search here by name,email, role..'
    }

}
