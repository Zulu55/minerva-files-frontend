import {
    ColumnDef
} from '@tanstack/react-table'
import {
    PlusIcon,
    ArrowPathIcon
} from '@heroicons/react/20/solid'
import React from 'react'
import { AppButton, AppPagination, LayoutHeadModal } from 'bm-react-lib'
import { Form } from 'react-final-form'
import { FormApi } from 'final-form'
import { useTableConfig, useModal, useLoader } from '@hooks/index'
import useGetCompany from '../../../../../hooks/data/get_company'
import { AppTableBody, AppTableHead } from '../../../../../../components/table'
import { Company } from '../../../../../models/company'
import { calculatePagination } from '@utils/index'


interface TableViewProps {
    columns: ColumnDef<Company, unknown>[],
    onPaginate: (url: string, record: number) => void
    onFilter: (url: string) => void
}

const TableView: React.FC<TableViewProps> = (props) => {

    const loader = useLoader();

    const company = useGetCompany();
    const data = company.data as Array<Company>;
    const columns = props.columns;
    const { openModal } = useModal();
    const table = useTableConfig({ data, columns });
    const pagination = calculatePagination(company.pagination) as Record<string, string>;

    const onSubmit = (data: unknown) => {
        console.log(data)
    }
    //props.onProcessFilter(JSON.stringify(data));

    const onReset = (form: FormApi<unknown>) => {
        // props.onProcessFilter("");
        form.reset();
    }

    return (
        <>
            <div className="app-layout">
                <Form
                    onSubmit={onSubmit}
                >
                    {({ handleSubmit, form }) => (
                        <form onSubmit={handleSubmit}>
                            <LayoutHeadModal title='Company'>
                                <span className="sm:ml-3">
                                    <AppButton
                                        context={loader}
                                        onClick={() => { openModal('create_process') }}
                                        text='New'
                                        className='app-button-base'
                                        child={
                                            <PlusIcon aria-hidden="true" className="app-icon-base text-green-600" />
                                        }>
                                    </AppButton>
                                    <AppButton
                                        onClick={() => onReset(form)}
                                        context={loader}
                                        text='Update'
                                        className='app-button-base'
                                        child={
                                            <ArrowPathIcon aria-hidden="true" className="app-icon-base text-blue-600" />
                                        }>
                                    </AppButton>
                                </span>
                            </LayoutHeadModal>
                            <AppPagination
                                from={pagination.pFrom}
                                to={pagination.pTo}
                                total={pagination.pTotal}
                                currentPage={pagination.pCurrentPage}
                                lastPage={pagination.pLastPage}
                                childPrevious={<a onClick={() => props.onPaginate(pagination.pBackPage, 10)} className="app-pagination-previous">
                                    Previous
                                </a>}
                                childNext={<a onClick={() => props.onPaginate(pagination.pNextPage, 10)} className="app-pagination-next">
                                    Next
                                </a>}
                            ></AppPagination>
                            <div className="overflow-x-auto styled-table">
                                <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                                    <thead className='text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                        <AppTableHead handleSubmit={handleSubmit} table={table.getHeaderGroups()}>
                                        </AppTableHead>
                                    </thead>
                                    <tbody>
                                        <AppTableBody table={table.getRowModel()}></AppTableBody>
                                    </tbody>
                                </table>
                            </div>
                        </form>)
                    }
                </Form>
            </div>
        </>
    )
}

export default TableView;