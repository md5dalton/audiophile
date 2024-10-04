import { CartProvider } from "./CartContext"
import { ModalProvider } from "./Modal"

export default ({ children }) => (
    <CartProvider>
        <ModalProvider>
            {children}
        </ModalProvider>
    </CartProvider>
)