import { motion } from 'framer-motion';
import PrintIcon from '@mui/icons-material/Print';
import ArticleIcon from '@mui/icons-material/Article';
import PagesIcon from '@mui/icons-material/Pages';

function Feature({ IconComponent, title, description, circleColor }) {
    // Define la animación para cuando el elemento entra en el viewport
    const whileInViewVariants = {
        hidden: { opacity: 0, y: 50 }, // Inicia invisible y un poco hacia abajo
        visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } }, // Ajusta el delay aquí
    };

    return (
        <motion.div
            className="flex flex-col items-center gap-2"
            variants={whileInViewVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Esto asegura que la animación solo se ejecute una vez
        >
            <div className={`rounded-full p-3 inline-flex ${circleColor}`}>
                <IconComponent style={{ color: 'white', fontSize: '2rem' }} />
            </div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{description}</p>
        </motion.div>
    );
}

function FeatureContainer() {
    return (
        <div className="flex justify-center items-center mx-5 md:mx-10 mt-4 min-h-[300px] mb-10 pb-20"> 
            <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                <Feature IconComponent={PrintIcon} title="IMPRESIÓN" description="Nuestra web ofrece servicios de impresión personalizados y de alta calidad..." circleColor="bg-red-500" />
                <Feature IconComponent={ArticleIcon} title="PLASTIFICADOS" description="Ofrecemos soluciones avanzadas en plastificación para proteger y realzar documentos..." circleColor="bg-yellow-500" />
                <Feature IconComponent={PagesIcon} title="ENCUADERNACIONES" description="Proporcionamos servicios profesionales de encuadernación para documentos y proyectos..." circleColor="bg-blue-500" />
            </div>
        </div>
    );
}

export default FeatureContainer;
