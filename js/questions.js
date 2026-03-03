// Start date for the first question (Issue #1 launch)
const START_DATE = new Date('2026-03-01'); 

const neuroQuestions = [
    {
        id: 1,
        question: "A 65-year-old male presents with sudden onset right-sided weakness and aphasia. Which vessel is most likely involved?",
        options: ["Left MCA", "Right MCA", "Left PCA", "Basilar Artery"],
        correct: 0,
        explanation: "The Left Middle Cerebral Artery (MCA) supplies the dominant hemisphere's motor cortex and language centers."
    },
    {
        id: 2,
        question: "Which imaging is most sensitive for early acute ischemic stroke?",
        options: ["CT Head", "CT Angiography", "MRI DWI", "MRI T2/FLAIR"],
        correct: 2,
        explanation: "Diffusion-Weighted Imaging (DWI) detects restricted water diffusion within minutes of ischemia."
    },
    {
        id: 3,
        question: "A patient presents with 'worst headache of life' and neck stiffness. CT is negative. Next step?",
        options: ["Discharge home", "MRI Brain", "Lumbar Puncture", "Repeat CT in 24h"],
        correct: 2,
        explanation: "If CT is negative but suspicion for SAH is high, LP is required to check for xanthochromia."
    },
    {
        id: 4,
        question: "Which antibody is most specific for Neuromyelitis Optica (NMO)?",
        options: ["Anti-AChR", "Anti-Aquaporin 4", "Anti-MuSK", "Anti-GQ1b"],
        correct: 1,
        explanation: "Aquaporin-4 (AQP4) antibodies are highly specific markers for NMO."
    },
    {
        id: 5,
        question: "A 30yo female has optic neuritis and periventricular white matter lesions. CSF shows:",
        options: ["High protein, normal cells", "Oligoclonal bands", "Low glucose", "Xanthochromia"],
        correct: 1,
        explanation: "Oligoclonal bands in CSF indicate intrathecal IgG synthesis, common in MS."
    },
    {
        id: 6,
        question: "First-line treatment for an adult in Status Epilepticus is:",
        options: ["Phenytoin", "Valproate", "Lorazepam", "Levetiracetam"],
        correct: 2,
        explanation: "Benzodiazepines like Lorazepam are the preferred initial emergent treatment."
    },
    {
        id: 7,
        question: "Which nerve is compressed in Carpal Tunnel Syndrome?",
        options: ["Ulnar", "Radial", "Median", "Axillary"],
        correct: 2,
        explanation: "The Median nerve passes through the carpal tunnel under the transverse carpal ligament."
    },
    {
        id: 8,
        question: "A patient has a 'blown pupil' and down-and-out eye position. This indicates:",
        options: ["CN VI Palsy", "CN IV Palsy", "CN III Palsy", "Horner Syndrome"],
        correct: 2,
        explanation: "CN III (Oculomotor) palsy causes ptosis, mydriasis, and a down/out gaze."
    },
    {
        id: 9,
        question: "The 'Triple H' therapy for vasospasm after SAH includes:",
        options: ["Heparin", "Hypervolemia", "Hypotension", "Hyperthermia"],
        correct: 1,
        explanation: "Hypervolemia, Hypertension, and Hemodilution (Triple H) were traditional vasospasm treatments."
    },
    {
        id: 10,
        question: "Which neurotransmitter is primarily lost in Parkinson's Disease?",
        options: ["Serotonin", "Dopamine", "Acetylcholine", "GABA"],
        correct: 1,
        explanation: "PD involves the loss of dopaminergic neurons in the substantia nigra pars compacta."
    },
    {
        id: 11,
        question: "The presence of Lewy bodies is the pathological hallmark of:",
        options: ["Alzheimer's", "Parkinson's", "ALS", "Huntington's"],
        correct: 1,
        explanation: "Lewy bodies (alpha-synuclein aggregates) are characteristic of PD and Lewy Body Dementia."
    },
    {
        id: 12,
        question: "A 25yo has ascending paralysis after a diarrheal illness. Diagnosis?",
        options: ["Myasthenia Gravis", "Guillain-Barré Syndrome", "Polio", "MS"],
        correct: 1,
        explanation: "GBS often follows Campylobacter jejuni infection, presenting as ascending weakness."
    },
    {
        id: 13,
        question: "Treatment of choice for Trigeminal Neuralgia is:",
        options: ["Gabapentin", "Carbamazepine", "Prednisone", "Sumatriptan"],
        correct: 1,
        explanation: "Carbamazepine is the gold-standard first-line medical therapy for TN."
    },
    {
        id: 14,
        question: "A 'Cape-like' loss of pain and temperature over the shoulders suggests:",
        options: ["Brown-Sequard", "Syringomyelia", "Tabes Dorsalis", "Cauda Equina"],
        correct: 1,
        explanation: "A syrinx in the central canal disrupts the crossing spinothalamic fibers."
    },
    {
        id: 15,
        question: "Bitemporal hemianopsia is caused by a lesion at the:",
        options: ["Optic Nerve", "Optic Chiasm", "Optic Tract", "Occipital Lobe"],
        correct: 1,
        explanation: "Pressure on the optic chiasm (often from pituitary tumors) affects decussating nasal fibers."
    },
    {
        id: 16,
        question: "Wernicke's Encephalopathy triad includes ataxia, ophthalmoplegia, and:",
        options: ["Aphasia", "Confusion", "Hemiparesis", "Seizures"],
        correct: 1,
        explanation: "Wernicke's results from Thiamine (B1) deficiency, typically in chronic alcohol use."
    },
    {
        id: 17,
        question: "The most common primary brain tumor in adults is:",
        options: ["Meningioma", "Glioblastoma", "Ependymoma", "Medulloblastoma"],
        correct: 1,
        explanation: "Glioblastoma Multiforme (GBM) is the most frequent and aggressive primary malignancy."
    },
    {
        id: 18,
        question: "A patient has chorea and personality changes. The genetic defect is:",
        options: ["CAG repeat", "GAA repeat", "CTG repeat", "CGG repeat"],
        correct: 0,
        explanation: "Huntington's Disease is caused by CAG repeats in the HTT gene on chromosome 4."
    },
    {
        id: 19,
        question: "Fatiguable ptosis and diplopia that improves with ice suggests:",
        options: ["Lambert-Eaton", "Myasthenia Gravis", "Botulism", "Miller Fisher"],
        correct: 1,
        explanation: "The 'Ice Pack Test' improves neuromuscular transmission in Myasthenia Gravis."
    },
    {
        id: 20,
        question: "Which medication should be avoided in patients with Myasthenia Gravis?",
        options: ["Aspirin", "Gentamicin", "Lisinopril", "Metformin"],
        correct: 1,
        explanation: "Aminoglycosides can exacerbate neuromuscular blockade in MG patients."
    },
    {
        id: 21,
        question: "A 'thunderclap headache' is most characteristic of:",
        options: ["Migraine", "Cluster Headache", "Subarachnoid Hemorrhage", "Giant Cell Arteritis"],
        correct: 2,
        explanation: "SAH classically presents as a sudden, excruciating 'thunderclap' headache."
    },
    {
        id: 22,
        question: "Target INR for a patient with a mechanical mitral valve is:",
        options: ["1.5-2.5", "2.0-3.0", "2.5-3.5", "3.0-4.0"],
        correct: 2,
        explanation: "Mechanical mitral valves require higher anticoagulation levels (2.5-3.5)."
    },
    {
        id: 23,
        question: "Dementia, gait instability, and urinary incontinence suggests:",
        options: ["Alzheimer's", "Normal Pressure Hydrocephalus", "Vascular Dementia", "Pick's Disease"],
        correct: 1,
        explanation: "The triad of 'Wet, Wobbly, and Wacky' is classic for NPH."
    },
    {
        id: 24,
        question: "Which reflex is lost first in Tabes Dorsalis?",
        options: ["Patellar", "Achilles", "Biceps", "Brachioradialis"],
        correct: 1,
        explanation: "Neurosyphilis (Tabes) affects the dorsal columns and lumbosacral roots."
    },
    {
        id: 25,
        question: "The drug of choice for Trigeminal Neuralgia is:",
        options: ["Topiramate", "Carbamazepine", "Baclofen", "Amitriptyline"],
        correct: 1,
        explanation: "Carbamazepine is the first-line pharmaceutical intervention for TN."
    },
    {
        id: 26,
        question: "Which of the following is a classic EEG finding in CJD?",
        options: ["3Hz Spike-Wave", "Periodic Sharp Wave Complexes", "Hypsarrhythmia", "Temporal Spikes"],
        correct: 1,
        explanation: "Creutzfeldt-Jakob Disease typically shows periodic synchronous sharp wave complexes (PSWC)."
    },
    {
        id: 27,
        question: "The 'Empty Delta Sign' on contrast CT suggests:",
        options: ["Epidural Hematoma", "Dural Venous Sinus Thrombosis", "Subdural Hematoma", "Abscess"],
        correct: 1,
        explanation: "The empty delta sign indicates a thrombus in the superior sagittal sinus."
    },
    {
        id: 28,
        question: "Initial treatment for temporal arteritis with vision loss is:",
        options: ["Low-dose Aspirin", "IV Methylprednisolone", "Oral Prednisone", "Methotrexate"],
        correct: 1,
        explanation: "Emergent high-dose IV steroids are needed to prevent permanent blindness."
    },
    {
        id: 29,
        question: "A 'lucid interval' after head trauma is classic for:",
        options: ["Subdural Hematoma", "Epidural Hematoma", "Subarachnoid Hemorrhage", "DAI"],
        correct: 1,
        explanation: "Middle meningeal artery rupture (Epidural) often features a temporary lucid state."
    },
    {
        id: 30,
        question: "Which vitamin deficiency causes Subacute Combined Degeneration?",
        options: ["B1", "B6", "B12", "E"],
        correct: 2,
        explanation: "B12 deficiency affects the dorsal columns and lateral corticospinal tracts."
    }
];