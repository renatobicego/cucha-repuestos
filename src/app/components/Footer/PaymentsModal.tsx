import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

const PaymentsModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        variant="light"
        className="p-0 h-auto text-texto font-medium max-xl:text-xs"
        onPress={onOpen}
      >
        Pagos y envíos
      </Button>
      <Modal scrollBehavior="inside" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Pagos y envíos
              </ModalHeader>
              <ModalBody>
                <p>
                  Trabajamos con las compañías de correo más importantes del
                  país. Usted también pude acercarse a las sedes de Comodoro
                  Rivadavia o Esquel para retirar su compra, siempre y cuando
                  esta esté disponible para hacerlo. Cabe aclarar que los pagos
                  no se realizan mediante esta web; los mismos son realizados
                  por los diferentes medios de pago acordados con el vendedor.
                </p>
                <p>
                  Los métodos de pagos disponibles son transferencia bancaria,
                  cheques, efectivo en cualquiera de las sedes y tarjetas
                  bancarias (consultar por otros medios de pago). Ante
                  cualquier consulta podrá contactarnos por los medios
                  proporcionados en esta página web.
                </p>
                <p>
                  Envíos por encomienda o empresas de transporte a retirar por
                  terminal, con pagadero en destino. Estas son algunas de las
                  empresas con las que trabajamos (consultar por la
                  disponibilidad de otras): Etap, Via Cargo, Correo Argentino,
                  Expreso de a 4 Bahía, Transporte Unión y Sportman.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PaymentsModal;
