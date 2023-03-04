import React from 'react'

const SvgIcons = ({ id }) => {
    switch (id) {
        case 'send':
            return (
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.4 17.4L18.85 9.91999C19.66 9.56999 19.66 8.42999 18.85 8.07999L1.4 0.599986C0.74 0.309986 0.00999999 0.799987 0.00999999 1.50999L0 6.11999C0 6.61999 0.37 7.04999 0.87 7.10999L15 8.99999L0.87 10.88C0.37 10.95 0 11.38 0 11.88L0.00999999 16.49C0.00999999 17.2 0.74 17.69 1.4 17.4Z" fill="white" />
                </svg>

            )
            break;
        case 'camera':
            return (
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2H14.83L13.59 0.65C13.22 0.24 12.68 0 12.12 0H7.88C7.32 0 6.78 0.24 6.4 0.65L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM10 15C7.24 15 5 12.76 5 10C5 7.24 7.24 5 10 5C12.76 5 15 7.24 15 10C15 12.76 12.76 15 10 15Z" fill="white" />
                </svg>
            )
        default:
            return null
    }
}

export default SvgIcons