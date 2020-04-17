-- SQLite
SELECT o.Id, s.CompanyName
FROM [Order] as o
JOIN Shipper as s
    ON o.ShipVia = s.id
WHERE o.OrderDate < '2012-08-09';
