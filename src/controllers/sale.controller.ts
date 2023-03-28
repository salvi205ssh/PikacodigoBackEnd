import { SaleService } from "../services/sale.service";

const saleService: SaleService = new SaleService();

export const saleController = {
    addNewSale: (req: any, res: any) => {
        try {
            saleService.addNewSale(req.body).then(newSaleId => res.json(newSaleId));
        } catch (exception) {
            console.error(exception);
            res.sendStatus(500);
        }
    },
}