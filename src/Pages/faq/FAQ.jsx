import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

export default function FAQ() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h6">Comment puis-je contacter le support client ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Vous pouvez contacter notre support client par email à support@exemple.com
            ou par téléphone au +123 456 789. Notre équipe est disponible du lundi au vendredi, de 9h à 18h.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h6">Quels sont vos horaires d'ouverture ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nos horaires d'ouverture sont du lundi au vendredi, de 9h à 18h. Nous sommes fermés le week-end et les jours fériés.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Troisième question */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="h6">Comment puis-je suivre ma commande ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Après avoir passé une commande, vous recevrez un email avec un lien de suivi. Vous pouvez utiliser ce lien pour suivre l'état de votre commande en temps réel.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Quatrième question */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography variant="h6">Proposez-vous des remises ou des promotions ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Oui, nous proposons régulièrement des promotions et des réductions. Inscrivez-vous à notre newsletter pour être informé(e) de nos dernières offres et promotions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Cinquième question */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography variant="h6">Est-ce que vos produits sont garantis ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Oui, tous nos produits sont garantis pendant 2 ans à partir de la date d'achat. En cas de défaut, veuillez nous contacter pour organiser un remplacement ou une réparation.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Sixième question */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography variant="h6">Comment annuler ma commande ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Vous pouvez annuler votre commande dans les 24 heures suivant l'achat. Après ce délai, nous ne serons plus en mesure d'annuler la commande, mais vous pourrez demander un retour une fois que vous aurez reçu l'article.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
