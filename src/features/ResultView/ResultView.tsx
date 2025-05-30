import { Box, Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import { useMeasuring } from "../../shared/context";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const ResultView = () => {
    const { result, cleanResults } = useMeasuring();

    if (!result) return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>Некорректные значения для рассчета!</Box>
    );

    return (
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header">
                    Лучшие совпадения
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        {result.bestMatch.map((e, index) => (
                            <Card sx={{ minWidth: 275 }} key={index}>
                                <CardContent>
                                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                        Разметка:
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {e.Markup}
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Количество рядов: {e.rowsCount}</Typography>
                                    <Typography variant="body2">
                                        Фуга:
                                        <br />
                                        {e.brickGap}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}

                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header">
                    Без фуги у пола
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        {result.bestMatchOnFloor.map((e, index) => (
                            <Card sx={{ minWidth: 275 }} key={index}>
                                <CardContent>
                                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                        Разметка:
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {e.Markup}
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Количество рядов: {e.rowsCount}</Typography>
                                    <Typography variant="body2">
                                        Фуга:
                                        <br />
                                        {e.brickGap}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}

                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header">
                    Все вычесления
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        {result.allMeasurings.map((e, index) => (
                            <Card sx={{ minWidth: 275 }} key={index}>
                                <CardContent>
                                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                        Разметка:
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {e.Markup}
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>Количество рядов: {e.rowsCount}</Typography>
                                    <Typography variant="body2">
                                        Фуга:
                                        <br />
                                        {e.brickGap}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}

                    </Box>
                </AccordionDetails>
            </Accordion>
            <Button onClick={cleanResults}>Пересчитать</Button>
        </Box>
    );
};