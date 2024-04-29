'use client'
import PaymentsModal from "./PaymentsModal"
import TermsConditionsModal from "./TermsConditionsModal"

const LegalInfo = () => {
  return (
    <nav className="flex flex-col items-start gap-4">
      <h6 className="text-texto xl:text-lg font-semibold">Información Legal</h6>
      <ul className="flex flex-col items-start gap-2">
        <li>
          <PaymentsModal />
        </li>
        <li>
          <TermsConditionsModal />
        </li>
      </ul>
    </nav>
  )
}

export default LegalInfo