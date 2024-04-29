import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

const TermsConditionsModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        variant="light"
        className="p-0 h-auto text-texto font-medium max-xl:text-xs"
        onPress={onOpen}
      >
        Reembolsos y garantías
      </Button>
      <Modal scrollBehavior="inside" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Nuestra política respecto a reembolsos y garantías
              </ModalHeader>
              <ModalBody>
                <p>
                  Para los productos ofrecidos por JERE & LEO PATAGONIA S.R.L.
                  no ofrecemos reembolsos una vez que el producto ha sido
                  enviado. Es su responsabilidad comprender completamente lo que
                  está adquiriendo antes de comprarlo, por lo que le
                  recomendamos que solicite información sobre los detalles del
                  producto que busca mediante el formulario de contacto de la
                  web, los detalles del mismo serán enviados una vez se
                  comunique con el asesor de ventas. Sin embargo, hacemos
                  excepciones a esta regla en casos donde la descripción del
                  producto que enviamos no coincide con los detalles
                  proporcionados por el asesor.
                </p>
                <p>
                  Algunos productos pueden estar cubiertos por una garantía y
                  ser elegibles para reembolso, pero esta información se
                  especificará al momento de la compra. En estos casos, la
                  garantía solo cubrirá defectos de fábrica y solo se aplicará
                  si el producto ha sido utilizado correctamente, según las
                  especificaciones técnicas y ambientales indicadas por el
                  fabricante, para su función prevista. La garantía no cubre
                  daños causados por un uso inadecuado. Los términos de la
                  garantía están asociados con posibles defectos de fabricación
                  y funcionamiento normal del producto, y solo serán aplicables
                  si el equipo ha sido utilizado de acuerdo con las
                  especificaciones indicadas, incluyendo el uso para el cual fue
                  diseñado, así como las condiciones eléctricas recomendadas.
                </p>
                <p>
                  Cabe aclarar que la compra se realiza por las vías de
                  comunicación brindadas dentro de esta web y no mediante la
                  misma, por lo que cualquier reclamo se realizará por estos
                  medios mencionados.
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

export default TermsConditionsModal;
