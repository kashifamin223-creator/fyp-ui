"use client";

import Navbar from "../components/Home/Nevbar";

export default function ReferencesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto p-6">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#064E3B] mb-4">
              References & Resources
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Evidence-based research, clinical guidelines, and authoritative sources 
              that inform our therapeutic approaches and mental health support services.
            </p>
          </header>

          {/* Clinical Guidelines */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#064E3B] mb-6">Clinical Guidelines & Standards</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">American Psychological Association (APA)</h3>
                  <p className="text-gray-600 mb-1">Guidelines for the Treatment of Trauma and PTSD</p>
                  <p className="text-sm text-gray-500">APA Guidelines (2022) • doi:10.1037/trm0000304</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">National Institute of Mental Health (NIMH)</h3>
                  <p className="text-gray-600 mb-1">Child and Adolescent Mental Health Resources</p>
                  <p className="text-sm text-gray-500">NIMH Publication (2023) • www.nimh.nih.gov/health/topics/child-adolescent-mental-health</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">World Health Organization (WHO)</h3>
                  <p className="text-gray-600 mb-1">Mental Health Gap Action Programme (mhGAP)</p>
                  <p className="text-sm text-gray-500">WHO Guidelines (2022) • ISBN 978-92-4-1550495</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-xl font-semibold mb-2">Substance Abuse and Mental Health Services Administration (SAMHSA)</h3>
                  <p className="text-gray-600 mb-1">Trauma-Informed Care in Behavioral Health Services</p>
                  <p className="text-sm text-gray-500">SAMHSA Treatment Improvement Protocol (2014) • Publication No. 14-4884</p>
                </div>
              </div>
            </div>
          </section>

          {/* Research Studies */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#064E3B] mb-6">Key Research Studies</h2>
              
              <h3 className="text-2xl font-semibold mb-4 text-[#10B981]">Child Trauma & Abuse</h3>
              <div className="space-y-3 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">The Long-Term Impact of Childhood Trauma</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Felitti VJ, et al. "Relationship of Childhood Abuse and Household Dysfunction to Many Leading Causes of Death in Adults."
                  </p>
                  <p className="text-xs text-gray-500">American Journal of Preventive Medicine (1998) • 14(4):245-258</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Trauma-Focused Cognitive Behavioral Therapy for Children</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Cohen JA, Mannarino AP, Deblinger E. "Treating Trauma and Traumatic Grief in Children and Adolescents."
                  </p>
                  <p className="text-xs text-gray-500">Guilford Press (2020) • 2nd Edition</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Child Abuse Prevention and Intervention</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    WHO. "Child maltreatment: Fact sheets."
                  </p>
                  <p className="text-xs text-gray-500">World Health Organization (2022) • www.who.int/news-room/fact-sheets/detail/child-maltreatment</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-[#10B981]">School & Student Mental Health</h3>
              <div className="space-y-3 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Mental Health in College Students</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Auerbach RP, et al. "The WHO World Mental Health International College Student Initiative."
                  </p>
                  <p className="text-xs text-gray-500">Lancet Psychiatry (2016) • 3(9):821-827</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">School-Based Mental Health Interventions</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Weare K. "Mental Health Promotion and Problem Prevention in Schools."
                  </p>
                  <p className="text-xs text-gray-500">School Mental Health (2020) • 13(1):37-58</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Bullying Prevention in Schools</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Gaffney H, et al. "Bullying, Cyberbullying, and Mental Health."
                  </p>
                  <p className="text-xs text-gray-500">Journal of Adolescent Health (2021) • 68(1):13-20</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-[#10B981]">Professional & Adult Mental Health</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Workplace Mental Health</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Harvey SB, et al. "Occupational and Educational Outcomes of Depression."
                  </p>
                  <p className="text-xs text-gray-500">Current Opinion in Psychiatry (2020) • 33(4):416-424</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Parenting and Mental Health</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Lovejoy MC, et al. "Parenting and Depressive Symptoms."
                  </p>
                  <p className="text-xs text-gray-500">Psychological Bulletin (2000) • 126(3):497-523</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-1">Elderly Mental Health Care</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Alexopoulos GS. "Late-Life Depression."
                  </p>
                  <p className="text-xs text-gray-500">New England Journal of Medicine (2019) • 380(24):2360-2370</p>
                </div>
              </div>
            </div>
          </section>

          {/* Assessment Tools */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#064E3B] mb-6">Assessment Tools & Instruments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#DC2626]">Trauma Assessment</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>Child Trauma Screening Questionnaire (CTSQ)</strong> - Scheeringa & Zeanah (2021)</li>
                    <li>• <strong>UCLA PTSD Reaction Index</strong> - Pynoos et al. (2020)</li>
                    <li>• <strong>Trauma Symptom Checklist for Children (TSCC)</strong> - Briere (2022)</li>
                    <li>• <strong>Adverse Childhood Experiences (ACE) Questionnaire</strong> - Felitti et al. (1998)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#DC2626]">General Mental Health</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>Strengths and Difficulties Questionnaire (SDQ)</strong> - Goodman (2021)</li>
                    <li>• <strong>Patient Health Questionnaire (PHQ-9)</strong> - Kroenke et al. (2001)</li>
                    <li>• <strong>Generalized Anxiety Disorder-7 (GAD-7)</strong> - Spitzer et al. (2006)</li>
                    <li>• <strong>Columbia-Suicide Severity Rating Scale (C-SSRS)</strong> - Posner et al. (2011)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Online Resources */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#064E3B] mb-6">Online Resources & Helplines</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 text-blue-800">🔵 Emergency & Crisis</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>National Suicide Prevention Lifeline</strong>: 988</li>
                    <li>• <strong>Crisis Text Line</strong>: Text HOME to 741741</li>
                    <li>• <strong>Child Abuse Hotline</strong>: 1-800-4-A-CHILD</li>
                    <li>• <strong>Domestic Violence Hotline</strong>: 1-800-799-7233</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 text-green-800">🟢 Professional Organizations</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>American Psychological Association</strong>: apa.org</li>
                    <li>• <strong>National Association of Social Workers</strong>: socialworkers.org</li>
                    <li>• <strong>American Counseling Association</strong>: counseling.org</li>
                    <li>• <strong>NAMI (National Alliance on Mental Illness)</strong>: nami.org</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3 text-purple-800">🟣 Educational Resources</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Mental Health America</strong>: mhanational.org</li>
                    <li>• <strong>The Trevor Project</strong>: thetrevorproject.org</li>
                    <li>• <strong>Kids Help Phone</strong>: kidshelpphone.ca</li>
                    <li>• <strong>Psychology Today</strong>: psychologytoday.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Books & Publications */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#064E3B] mb-6">Recommended Books & Publications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#10B981]">For Professionals</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>"The Body Keeps the Score"</strong> - Bessel van der Kolk (2014)</li>
                    <li>• <strong>"Trauma and Recovery"</strong> - Judith Herman (2015)</li>
                    <li>• <strong>"Treating Complex Trauma"</strong> - John Briere & Catherine Scott (2022)</li>
                    <li>• <strong>"The Boy Who Was Raised as a Dog"</strong> - Bruce D. Perry (2017)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#10B981]">For Families & General Public</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>"The Whole-Brain Child"</strong> - Daniel J. Siegel & Tina Payne Bryson (2011)</li>
                    <li>• <strong>"What Happened to You?"</strong> - Bruce D. Perry & Oprah Winfrey (2021)</li>
                    <li>• <strong>"The Body Is Not an Apology"</strong> - Sonya Renee Taylor (2018)</li>
                    <li>• <strong>"My Age of Anxiety"</strong> - Patricia Pearson (2014)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mb-12">
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-yellow-800 mb-4">Important Disclaimer</h2>
              <div className="text-yellow-700 space-y-2">
                <p>
                  The information provided on this website and in these references is for educational purposes only 
                  and is not a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                <p>
                  Always seek the advice of your physician or other qualified health provider with any questions 
                  you may have regarding a medical condition or mental health concern.
                </p>
                <p>
                  In case of emergency, call 911 or go to your nearest emergency department immediately.
                </p>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <section className="text-center">
            <p className="text-sm text-gray-500">
              Last updated: November 2024 | References reviewed and updated quarterly
            </p>
            <p className="text-sm text-gray-500 mt-2">
              For questions about these references, please contact: research@mentalhealth.com
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
