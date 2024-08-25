"use client"

import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationControlProps {
    totalPages: number
    currentPage: number
}

const PaginationControl: React.FC<PaginationControlProps> = ({ totalPages, currentPage }) => {

    const paginationButtons = Array.from({ length: totalPages }, (_, index) => index);

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href={{
                            query: { page: Math.max(currentPage - 1, 1) }, // Prevent going below page 1
                        }}

                    />
                </PaginationItem>
                {paginationButtons.map((btn, idx) => (
                    <PaginationItem key={`btn-${idx}`}>
                        <PaginationLink
                            href={{
                                query: { page: idx + 1 },
                            }}
                        >{idx + 1}</PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext
                        href={{
                            query: { page: Math.max(currentPage + 1, totalPages) }, // Prevent going below page 1
                        }}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

    )
}

export default PaginationControl